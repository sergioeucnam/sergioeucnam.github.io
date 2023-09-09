import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Proyectos en los que estoy <GradientText>trabajando</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="SaaS Web App"
        description="
        Actualmente en desarrollo para una compañia de seguros. Se busca crear una plataforma para que los clientes puedan acceder a sus polizas y realizar pagos online de manera rapida y sencilla.
        "
        link="/"
        img={{
          src: '/assets/images/top-secret.png',
          alt: 'saas-web-app',
        }}
        category={
          <>
            <Tags color={ColorTags.RED}>NestJS</Tags>
            <Tags color={ColorTags.SKY}>MySQL</Tags>
            <Tags color={ColorTags.GREEN}>MongoDB</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
          </>
        }
        status={
          <>
          <Tags color={ColorTags.GREEN}>In Progress</Tags>
          </>
        }
      />
      <Project
        name="Migracion de plataforma API "
        description="
        Migracion de la plataforma API para una importante empresa gastronomica de Paraguay. Se busca mejorar la performance de la plataforma y agregar nuevas funcionalidades. Actualizando la plataforma de PHP 5 a PHP 7.4.
        "
        link="/"
        img={{ src: '/assets/images/top-secret.png', alt: 'api-migration' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>PHP</Tags>
            <Tags color={ColorTags.SKY}>MySQL</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
          </>
        }
        status={
          <>
          <Tags color={ColorTags.GREEN}>In Progress</Tags>
          </>
        }
      />
      <Project
        name="Aplicacion de escritorio para gestion de ventas"
        description="
        Con el trabajo se busca agilizar el proceso de venta tercerizada de un vendedor mayorista. Se busca crear una aplicacion de escritorio que permita gestionar las ventas, clientes, productos, etc. Incluyendo un panel de administracion y stock.
        "
        link="/"
        img={{ src: '/assets/images/top-secret.png', alt: 'seller-dashboard-admin' }}
        category={
          <>
            <Tags color={ColorTags.RED}>Angular</Tags>
            <Tags color={ColorTags.GREEN}>Tailwind</Tags>
            <Tags color={ColorTags.BLUE}>TypeScript</Tags>
            <Tags color={ColorTags.YELLOW}>Electron</Tags>
          </>
        }
        status={
          <>
          <Tags color={ColorTags.GREEN}>In Progress</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
