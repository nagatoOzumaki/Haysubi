import React, { FC } from 'react';
import Footer from '../../components/footer';

type PropsType = {
  // eslint-disable-next-line no-undef
  children: JSX.Element | JSX.Element[];
};
const FooterLayout: FC<PropsType> = ({ children }) => (
  <div>
    {children}
    <Footer />
  </div>
);

export default FooterLayout;
