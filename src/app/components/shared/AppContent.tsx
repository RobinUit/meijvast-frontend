import { Route, Routes } from "react-router-dom";

import ScrollToTop from "../utils/ScrollToTop";
import Home from "app/views/HomeView";
import Properties from "app/views/PropertiesView";
import Property from "app/views/PropertyView";
import Contact from "app/views/ContactView";
import NotFound from "app/views/NotFoundView";

import "./AppContent.scss";

export default function AppContent() {
  return (
    <main className="container">
      <div className="content-wrapper">
        <ScrollToTop>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Home />} />

            {/* Aanbod */}
            <Route path="/aanbod">
              <Route index element={<Properties />} />
              <Route path=":propertyId" element={<Property />} />
            </Route>

            {/* Contact */}
            <Route path="/contact" element={<Contact />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </div>
    </main>
  );
}
