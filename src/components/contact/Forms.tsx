import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Text } from '@/components/Text';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

interface Props {
  loading: boolean;
  onSubmit: SubmitHandler<IFormInput>;
}

function ContactForm({ loading, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: 'onChange',
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Text variant="h3" className="col-span-full">
          Dites-nous ce dont vous avez besoin
        </Text>
        <div>
          <Input
            {...register('firstname', {
              required: 'Le prénom est requis',
            })}
            placeholder="Nom"
            className={errors.firstname ? 'border-destructive border-2' : ''}
          />
          {errors.firstname && (
            <p className="text-destructive text-sm mt-1">{errors.firstname.message}</p>
          )}
        </div>
        <div>
          <Input
            {...register('lastname', {
              required: 'Le nom est requis',
            })}
            placeholder="Prénom"
            className={errors.lastname ? 'border-destructive border-2' : ''}
          />
          {errors.lastname && (
            <p className="text-destructive text-sm mt-1">{errors.lastname.message}</p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Input
            {...register('phone', {
              required: 'Le téléphone est requis',
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Le numéro de téléphone est invalide',
              },
            })}
            placeholder="Téléphone"
            className={errors.phone ? 'border-destructive border-2' : ''}
          />
          {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <Input
            {...register('email', {
              required: "L'email est requis",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "L'email est invalide",
              },
            })}
            placeholder="Email"
            type="email"
            className={errors.email ? 'border-destructive border-2' : ''}
          />
          {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <Textarea
          {...register('message', {
            required: 'Le message est requis',
          })}
          rows={8}
          placeholder="Message"
          className={errors.message ? 'border-destructive border-2' : ''}
        />
        {errors.message && (
          <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" variant="default" disabled={loading}>
        {loading ? 'Envoi...' : 'Envoyer'}
      </Button>
    </form>
  );
}

export default ContactForm;
