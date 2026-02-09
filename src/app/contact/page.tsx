'use client';

import { useState } from 'react';
import { Text } from '@/components/Text';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2Icon } from 'lucide-react';
import ContactMap from '@/components/contact/Maps';
import ContactForm from '@/components/contact/Forms';

function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(data: any) {
    setLoading(true);
    setSuccess(false);

    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    setLoading(false);
    setSuccess(true);
  }

  return (
    <div className="container mx-auto p-4 pt-30">
      <Text variant="h1" className="mb-6">
        Vous avez des questions, <br />
        nous avons les réponses
      </Text>
      <div className="flex-col md:flex-row flex gap-12">
        <div className="self-start md:self-end order-1 md:order-0">
          <div>
            <Text variant="h3" className="mb-2">
              Localisation
            </Text>
            <Text variant="p" className="mb-2">
              FERRE TP <br />
              Chemin de coltainville <br />
              28700 Houville-la-Branche
            </Text>
          </div>
          <div>
            <Text variant="h3" className="mb-2">
              Email
            </Text>
            <Text variant="p" className="mb-2">
              contact@ferre-tp.com
            </Text>
          </div>
          <div>
            <Text variant="h3" className="mb-2">
              Contact
            </Text>
            <Text variant="p" className="mb-2">
              02 37 24 09 82
            </Text>
          </div>
        </div>
        <div className="md:max-w-lg bg-secondary p-6 md:ml-auto md:mr-0">
          <ContactForm loading={loading} onSubmit={handleSubmit} />
          {success && (
            <Alert className="mt-4">
              <CheckCircle2Icon className="h-4 w-4" />
              <AlertTitle>Message Envoyé</AlertTitle>
              <AlertDescription>
                Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs
                délais.
              </AlertDescription>
            </Alert>
          )}
        </div>
      </div>

      <ContactMap />
    </div>
  );
}

export default ContactPage;
