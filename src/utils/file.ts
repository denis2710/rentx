import fs from 'fs';

export const deleteFile = async (fileName: string): Promise<void> => { 
    try {
        await fs.promises.stat(fileName);
    } catch {
        return;
    }

    await fs.promises.unlink(fileName);
}