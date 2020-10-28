import React from 'react';
import { TemplateEnum } from './Template.types';
import dynamic from 'next/dynamic';

const Template = (props: any) => {
  if (props.template == 'TemplateHeaderCarAPD') {
    const TemplateHeaderCarAPD = dynamic(import('./TemplateHeaderCarAPD/TemplateHeaderCarAPD'));
    return <TemplateHeaderCarAPD {...props} />;
  }
  if (props.template == 'TemplateR1C1Flash') {
    const TemplateR1C1Flash = dynamic(import('./TemplateR1C1Flash/TemplateR1C1Flash'));
    return <TemplateR1C1Flash {...props} />;
  }

  if (props.template == 'TemplateR1C2S') {
    const TemplateR1C2S = dynamic(import('./TemplateR1C2S/TemplateR1C2S'));
    return <TemplateR1C2S {...props} />;
  }

  if (props.template == 'TemplateR1C3Off') {
    const TemplateR1C3Off = dynamic(import('./TemplateR1C3Off/TemplateR1C3Off'));
    return <TemplateR1C3Off {...props} />;
  }

  if (props.template == 'TemplateR1C4CaHovSt') {
    const TemplateR1C4CaHovSt = dynamic(import('./TemplateR1C4CaHovSt/TemplateR1C4CaHovSt'));
    return <TemplateR1C4CaHovSt {...props} />;
  }

  if (props.template == 'TemplateR1C4CaIcB') {
    const TemplateR1C4CaIcB = dynamic(import('./TemplateR1C4CaIcB/TemplateR1C4CaIcB'));
    return <TemplateR1C4CaIcB {...props} />;
  }

  if (props.template == 'TemplateR1C4CaLaTr') {
    const TemplateR1C4CaLaTr = dynamic(import('./TemplateR1C4CaLaTr/TemplateR1C4CaLaTr'));
    return <TemplateR1C4CaLaTr {...props} />;
  }
  if (props.template == 'TemplateR1C4SqButt') {
    const TemplateR1C4SqButt = dynamic(import('./TemplateR1C4SqButt/TemplateR1C4SqButt'));
    return <TemplateR1C4SqButt {...props} />;
  }

  if (props.template == 'TemplateR2C3NoCa') {
    const TemplateR2C3NoCa = dynamic(import('./TemplateR2C3NoCa/TemplateR2C3NoCa'));
    return <TemplateR2C3NoCa {...props} />;
  }
  return <div>Template not found</div>;
};

export default Template;
