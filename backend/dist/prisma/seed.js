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
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const prisma = new client_1.PrismaClient();
async function main() {
    console.log('🌱 Seeding database...');
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
    const about = await prisma.about.upsert({
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
});
//# sourceMappingURL=seed.js.map