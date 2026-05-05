/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Sections } from './components/Sections';
import { Showcase } from './components/Showcase';
import { ContactFooter } from './components/ContactFooter';

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <Sections />
        <Showcase />
        <ContactFooter />
      </main>
    </div>
  );
}
