import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const domain =
        process.env.NEXT_PUBLIC_DOMAIN?.replace(/\/$/, "") ||
        "https://bd-travel-spirit-support-system.vercel.app";

    const routes = [
        { path: "/", priority: 1.0 },
    ];

    return routes.map((route) => ({
        url: `${domain}${route.path}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route.priority,
    }));
}