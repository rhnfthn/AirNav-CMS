export const useUploader = () => {
  const { apiFetch } = useApiClient();

  const uploadFile = async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await apiFetch<{ url: string; path: string }>(`/attachments`, {
      method: 'POST',
      body: formData as any,
    });

    return res.url;
  };

  return { uploadFile };
};
