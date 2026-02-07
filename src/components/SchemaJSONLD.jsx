import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SchemaJSONLD({ data }) {
    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(data)}
            </script>
        </Helmet>
    );
}
