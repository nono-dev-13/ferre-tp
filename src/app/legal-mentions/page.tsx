import { Text } from '@/components/Text';

function LegalMentions() {
  return (
    <div className="container mx-auto p-4 pt-30">
      <header className="mb-8 text-center">
        <Text variant="h1" className="mb-4">
          Mentions légales de www.ferre-tp.com
        </Text>
        <Text variant="h2" className="mb-4">
          au 28 novembre 2020
        </Text>
      </header>
      <div className="grid md:grid-cols-2 gap-8 mb-6">
        <div>
          <Text variant="h3" className="mb-4">
            Éditeur du site : SARL FERRE TP
          </Text>
          <ul className="space-y-2">
            <li>
              <Text variant="p">Adresse : chemin de coltainville, 28700 Houville-la-Branche</Text>
            </li>
            <li>
              <Text variant="p">Mail : contact@ferre-tp.com</Text>
            </li>
            <li>
              <Text variant="p">Téléphone : 02 37 24 09 82</Text>
            </li>
            <li>
              <Text variant="p">Site web : www.ferre-tp.com</Text>
            </li>
            <li>
              <Text variant="p">N° siret : 453 388 134</Text>
            </li>
            <li>
              <Text variant="p">N° TVA : FR 53 453 388 134</Text>
            </li>
            <li>
              <Text variant="p">Capital Social : 44 000 €</Text>
            </li>
          </ul>
        </div>
        <div>
          <Text variant="h3" className="mb-4">
            Conception et réalisation : SARL FERRE TP
          </Text>
          <ul className="space-y-2">
            <li>
              <Text variant="p">Hébergeur : OVH SAS, au capital de 500 000 euros</Text>
            </li>
            <li>
              <Text variant="p">RCS Roubaix - Tourcoing 424 761 419</Text>
            </li>
            <li>
              <Text variant="p">Code APE 721Z - N° TVA : FR2242476141900011</Text>
            </li>
            <li>
              <Text variant="p">Siège Social : 140 Quai du Sartel - 59100 ROUBAIX - France</Text>
            </li>
          </ul>
        </div>
      </div>
      <Text variant="h2" className="mb-4">
        Conditions générales d'utilisation & responsabilité
      </Text>
      <Text variant="p" className="text-justify leading-relaxed mb-6">
        Tous les éléments visuels et rédactionnels de ce site Internet sont la propriété de la
        société SARL FERRÉ TP, à l'exclusion des éléments émanant d'un partenaire de la société SARL
        FERRÉ TP. Les éléments de conception et développement du site restent la propriété de la
        société SARL FERRE TP. La protection du site www.ferre-tp.com relève par conséquent des
        législations nationales et transnationales relatives au droit de la propriété
        intellectuelle. Toute reproduction et/ou représentation, en tout ou partie, sur un
        quelconque support, présent ou futur, sont interdites, sauf autorisation expresse de la
        société SARL FERRÉ TP. Le non-respect de cette interdiction est susceptible de constituer un
        acte de contrefaçon pouvant engager la responsabilité civile ou pénale de tout contrevenant.
        Les informations contenues dans ce site sont non contractuelles et sujettes à modification
        sans préavis. En aucun cas, la société SARL FERRÉ TP ne pourrait être tenue responsable de
        quelques dommages ou perte d'exploitation liés directement ou pas à l'utilisation de son
        site www.ferre-tp.com
      </Text>

      <Text variant="h2" className="mb-4">
        Liens externes
      </Text>
      <Text variant="p" className="text-justify leading-relaxed mb-6">
        Le site contient des liens hypertextes vers des sites Internet gérés par des tiers. La
        société SARL FERRÉ TP ne peut exercer aucun contrôle permanent sur ces sites ni assumer
        aucune responsabilité quant à leurs conditions d'accès, leurs contenus, les publicités et
        services proposés. En conséquence, la société SARL FERRÉ TP ne saurait être tenue
        responsable dans le cadre d'un litige survenant entre ces sites et les utilisateurs.
      </Text>
      <Text variant="h2" className="mb-4">
        Propriété intellectuelle
      </Text>
      <Text variant="p" className="text-justify leading-relaxed mb-6">
        Les références commerciales des produits de la société SARL FERRÉ TP, www.ferre-tp.com ainsi
        que leurs logos, sont des marques de SARL FERRÉ TP. Les logos et marques des sociétés cités
        sur le site www.ferre-tp.com sont la propriété exclusive de leurs auteurs respectifs. Toute
        représentation, reproduction, et/ou exploitation, qu’elle(s) soi(en)t partielle(s) ou
        totale(s), des marques précitées est (sont) interdite(s), sauf accord écrit et préalable de
        leurs titulaires. Conformément à la loi "Informatique et libertés" n°78-17 du 6 janvier 1978
        modifiée, vous disposez d' un droit d' accès, de rectification, d’opposition et de
        suppression des données qui vous concernent. Pour l'excercer, adressez-vous à la société
        SARL FERRÉ TP - contact@ferre-tp.com
      </Text>
      <Text variant="h2">Droits d'auteur</Text>
      <Text variant="p" className="text-justify leading-relaxed mb-6">
        La reproduction, totale ou partielle, des contenus, pages, images, scripts et icônes
        présents sur le site www.ferre-tp.com est interdite sans l'accord exprès et préalable de
        l'éditeur du site la SARL FERRÉ TP - . Le non-respect de cette interdiction constitue une
        contrefaçon au sens des articles L 335-2 et suivants du Code de la propriété intellectuelle.
        L'élaboration de liens hypertextes profonds vers le site www.ferre-tp.com est interdite sans
        l'accord exprès et préalable de l'éditeur du site à savoir la société SARL FERRÉ TP.
      </Text>
    </div>
  );
}

export default LegalMentions;
