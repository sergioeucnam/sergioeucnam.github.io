import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          {/* Hi there, I'm <GradientText>Ixartz</GradientText> 👋 */}
          Hola soy <GradientText>Sergio</GradientText> 👋
        </>
      }
      description={

        <>
          Soy un desarrollador web full stack, me encanta aprender y compartir
          conocimiento. Actualmente estoy trabajando con tecnologías como
          Angular, React, NodeJS, Express, MongoDB, MySQL, entre otras. {''}

        </>
      }
      // avatar={
      //   <img
      //     className="h-80 w-64"
      //     src="/assets/images/avatar.svg"
      //     alt="Avatar image"
      //     loading="lazy"
      //   />
      // }
      socialButtons={
        <>
          <a href="https://twitter.com/sergioeucnam">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/sergio-mancuello/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="https://github.com/sergioeucnam/">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="GitHub icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
