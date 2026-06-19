export function LocalBusinessJsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://innodify.in/#localbusiness",
        name: "Innodify",
        image: "https://innodify.in/innodify-logo.svg",
        url: "https://innodify.in"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
