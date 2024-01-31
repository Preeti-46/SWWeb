import React from 'react'
import { useLocation, Routes, Route, Router } from 'react-router-dom';
import Sidebar from "../components/Sidebar.js";
import StudentDivisionOrgano from './StudentDivisionOrgano.js';
import SWDivisionOffice from "./SWDivisionOffice.js";
import Home from "./Home.js";
import Forms from "./Forms.js";
import AdministrativeOffice from "./AdministrativeOffice.js";
import Hostels from "./Hostels.js";
import MessAndCanteen from "./MessAndCanteen.js";
import Gymkhana from "./Gymkhana.js";
import GoToTop from "./GoToTop.js";
import StudentCampusLife from "./StudentCampusLife.js";
import WellnessSection from "./WellnessSection.js";
import HostelRules from "./HostelRules.js";
import HostelMaintenense from "./HostelMaintenense.js";
import Others from "./Others.js";
import { AnimatePresence } from 'framer-motion';


export default function AnimatedRoutes() {
    const location = useLocation();

    return (
        <div>
            <GoToTop />

            <Sidebar>
                <AnimatePresence>
                    <Routes location={location} key={location.pathname}>
                        <Route path="/" element={<Home />} />
                        <Route path="/dean_associate_deans" element={<SWDivisionOffice />} />
                        <Route path="/sw_division_organogram" element={<StudentDivisionOrgano />} />
                        <Route path="/forms" element={<Forms />} />
                        <Route path="/admnistrative_office" element={<AdministrativeOffice />} />
                        <Route path="/hostels" element={<Hostels />} />
                        <Route path="/mess_canteen" element={<MessAndCanteen />} />
                        <Route path="/gymkhana" element={<Gymkhana />} />
                        <Route path="/student_life" element={<StudentCampusLife />} />
                        <Route path="/wellness" element={<WellnessSection />} />
                        <Route path="/hostel_rules" element={<HostelRules />} />
                        <Route path="/hostel-maintenance" element={<HostelMaintenense />} />
                        <Route path="/others" element={<Others />} />
                    </Routes>
                </AnimatePresence>
            </Sidebar>
        </div>
    )
}
