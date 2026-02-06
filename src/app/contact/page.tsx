'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2Icon } from 'lucide-react';

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);

    const form = new FormData(e.target);

    const data = {
      name: form.get('name'),
      email: form.get('email'),
      message: form.get('message'),
    };

    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    setLoading(false);
    setSuccess(true);
    e.target.reset();
  }

  return (
    <div className="container mx-auto p-4 pt-30">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input name="name" placeholder="Nom" required />
        <Input name="email" placeholder="Email" type="email" required />
        <Textarea name="message" placeholder="Message" required />

        <Button type="submit" variant="default" disabled={loading}>
          {loading ? 'Envoi...' : 'Envoyer'}
        </Button>
      </form>
      {success && (
        <Alert className="mt-4">
          <CheckCircle2Icon className="h-4 w-4" />
          <AlertTitle>Message Envoyé</AlertTitle>
          <AlertDescription>
            Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}

export default ContactForm;
