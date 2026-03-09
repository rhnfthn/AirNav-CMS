"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const client_1 = require("@prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const bcrypt = __importStar(require("bcrypt"));
const pg_1 = require("pg");
function createPrismaClient() {
    const databaseUrl = process.env.DATABASE_URL;
    if (!databaseUrl) {
        throw new Error('DATABASE_URL is missing. Set it in backend/.env');
    }
    const pool = new pg_1.Pool({ connectionString: databaseUrl });
    const adapter = new adapter_pg_1.PrismaPg(pool);
    const prisma = new client_1.PrismaClient({ adapter });
    return { prisma, pool };
}
const { prisma, pool } = createPrismaClient();
async function main() {
    console.log('🌱 Seeding database...');
    const defaultPublicTheme = {
        primaryBackgroundColor: '#EAF4FB',
        sidebarBackgroundColor: '#F4F9FD',
        headerBackgroundColor: '#6FA8DC',
        primaryTextColor: '#2C3E50',
        secondaryTextColor: '#64748B',
        buttonColor: '#6FA8DC',
        borderColor: '#B8C6DB',
        loginCardBgColor: '#EAF4FB',
        loginCardBorderColor: '#B8C6DB',
        loginCardShadowColor: '#B8C6DB',
        loginLogoBgColor: '#A7D3F5',
        loginLogoBorderColor: '#B8C6DB',
        loginLogoShadowColor: '#B8C6DB',
        loginHeaderTextColor: '#2C3E50',
        loginContentTextColor: '#64748B',
        loginLabelTextColor: '#2C3E50',
        loginButtonLabel: 'Login',
        loginButtonBgColor: '#6FA8DC',
        loginButtonBorderColor: '#B8C6DB',
        loginButtonShadowColor: '#B8C6DB',
        loginBackToWebsiteText: '← Back to website',
    };
    const defaultAdminTheme = {
        primaryBackgroundColor: '#FFFFFF',
        sidebarBackgroundColor: '#FFFFFF',
        headerBackgroundColor: '#FFFFFF',
        primaryTextColor: '#000000',
        secondaryTextColor: '#808080',
        buttonColor: '#FFFFFF',
        borderColor: '#000000',
        loginCardBgColor: '#EAF4FB',
        loginCardBorderColor: '#B8C6DB',
        loginCardShadowColor: '#B8C6DB',
        loginLogoBgColor: '#A7D3F5',
        loginLogoBorderColor: '#B8C6DB',
        loginLogoShadowColor: '#B8C6DB',
        loginHeaderTextColor: '#2C3E50',
        loginContentTextColor: '#64748B',
        loginLabelTextColor: '#2C3E50',
        loginButtonLabel: 'Login',
        loginButtonBgColor: '#6FA8DC',
        loginButtonBorderColor: '#B8C6DB',
        loginButtonShadowColor: '#B8C6DB',
        loginBackToWebsiteText: '← Back to website',
    };
    const existingPublicTheme = await prisma.themeSettings.findUnique({ where: { scope: 'PUBLIC' } });
    if (existingPublicTheme) {
        await prisma.themeSettings.update({
            where: { id: existingPublicTheme.id },
            data: defaultPublicTheme,
        });
    }
    else {
        await prisma.themeSettings.create({ data: { scope: 'PUBLIC', ...defaultPublicTheme } });
    }
    const existingAdminTheme = await prisma.themeSettings.findUnique({ where: { scope: 'ADMIN' } });
    if (existingAdminTheme) {
        await prisma.themeSettings.update({
            where: { id: existingAdminTheme.id },
            data: defaultAdminTheme,
        });
    }
    else {
        await prisma.themeSettings.create({ data: { scope: 'ADMIN', ...defaultAdminTheme } });
    }
    console.log('✅ Theme settings (public + admin) seeded');
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = await prisma.admin.upsert({
        where: { email: 'admin@portfolio.com' },
        update: {},
        create: {
            name: 'Admin',
            email: 'admin@portfolio.com',
            password: hashedPassword,
        },
    });
    console.log('✅ Admin created:', admin.email);
    await prisma.about.upsert({
        where: { id: 'default-about' },
        update: {},
        create: {
            id: 'default-about',
            title: 'Full Stack Developer',
            description: 'Passionate developer with expertise in building modern web applications. I love creating clean, efficient, and scalable solutions.',
            photoUrl: null,
        },
    });
    console.log('✅ About section created');
    const projects = [
        {
            title: 'E-Commerce Platform',
            slug: 'e-commerce-platform',
            description: 'A full-featured e-commerce platform built with modern technologies.',
            techStack: ['NestJS', 'Nuxt 3', 'PostgreSQL', 'TailwindCSS'],
            githubUrl: 'https://github.com/example/ecommerce',
            liveUrl: 'https://ecommerce.example.com',
            published: true,
        },
        {
            title: 'Task Management App',
            slug: 'task-management-app',
            description: 'A collaborative task management application with real-time updates.',
            techStack: ['Vue 3', 'Node.js', 'MongoDB', 'Socket.io'],
            githubUrl: 'https://github.com/example/taskapp',
            published: true,
        },
    ];
    for (const project of projects) {
        await prisma.project.upsert({
            where: { slug: project.slug },
            update: {},
            create: project,
        });
    }
    console.log('✅ Sample projects created');
    const experiences = [
        {
            company: 'Tech Company A',
            position: 'Senior Full Stack Developer',
            startDate: new Date('2023-01-01'),
            endDate: null,
            description: 'Leading development of cloud-native applications and mentoring junior developers.',
        },
        {
            company: 'Startup B',
            position: 'Full Stack Developer',
            startDate: new Date('2021-06-01'),
            endDate: new Date('2022-12-31'),
            description: 'Built and maintained multiple web applications using modern JavaScript frameworks.',
        },
    ];
    await prisma.experience.deleteMany();
    for (const exp of experiences) {
        await prisma.experience.create({ data: exp });
    }
    console.log('✅ Sample experiences created');
    const certifications = [
        {
            title: 'AWS Certified Solutions Architect',
            issuer: 'Amazon Web Services',
            year: 2024,
            credentialUrl: 'https://aws.amazon.com/certification',
        },
        {
            title: 'Google Cloud Professional',
            issuer: 'Google',
            year: 2023,
        },
    ];
    await prisma.certification.deleteMany();
    for (const cert of certifications) {
        await prisma.certification.create({ data: cert });
    }
    console.log('✅ Sample certifications created');
    const tools = [
        { name: 'TypeScript', category: 'Language', iconUrl: null },
        { name: 'NestJS', category: 'Backend', iconUrl: null },
        { name: 'Nuxt 3', category: 'Frontend', iconUrl: null },
        { name: 'PostgreSQL', category: 'Database', iconUrl: null },
        { name: 'Docker', category: 'DevOps', iconUrl: null },
        { name: 'TailwindCSS', category: 'Styling', iconUrl: null },
    ];
    await prisma.tool.deleteMany();
    for (const tool of tools) {
        await prisma.tool.create({ data: tool });
    }
    console.log('✅ Sample tools created');
    console.log('🎉 Seeding completed!');
}
main()
    .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
});
//# sourceMappingURL=seed.js.map