
import { z } from "zod";

export const GenerationResultSchema = z.object({
    files: z.record(z.string(), z.string()),
    description: z.string().default("Generated project")
});

export const FileOpSchema = z.object({
    op: z.enum(["create", "update", "delete"]),
    path: z.string(),
    content: z.string().nullable().optional(),
    search: z.string().nullable().optional(),
    replace: z.string().nullable().optional(),
});

export const RevisionResultSchema = z.object({
    operations: z.array(FileOpSchema),
    description: z.string().default("Applied revisions")
});

export const FilePlanSchema = z.object({
    files: z.array(
        z.object({
            path: z.string(),
            description: z.string(),
            exports: z.string(),
            imports: z.array(z.string()),
        })
    ),
    projectName: z.string(),
    projectDescription: z.string()
});

export const FileCodeSchema = z.object({
    code: z.string(),
});
