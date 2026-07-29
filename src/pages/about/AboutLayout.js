import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Breadcrumb from '../../components/Breadcrumb';
import History from './History';
import VisionMission from './VisionMission';
import BoardOfDirectors from './BoardOfDirectors';
import PreviousBoard from './PreviousBoard';
import Branches from './Branches';
import Gallery from './Gallery';

const AboutLayout = () => {
  const sidebarItems = [
    {
      name: 'History',
      path: '/about/history',
    },
    {
      name: 'Vision & Mission',
      path: '/about/vision-mission',
    },
    {
      name: 'Board of Directors',
      path: '/about/board-of-directors',
    },
    {
      name: 'Previous Board of Directors',
      path: '/about/previous-board',
    },
    {
      name: 'Branches',
      path: '/about/branches',
    },
    {
      name: 'Awards & Gallery',
      path: '/about/gallery',
    },
  ];

  return (
    <div className="pt-16">
      <Breadcrumb />
      <div className="section-padding">
        <div className="container-max">
          <div className="flex flex-col lg:flex-row gap-8">
            <Sidebar items={sidebarItems} title="About Us" />
            <div className="page-content-panel flex-grow min-h-[400px] p-6 lg:p-8">
              <Routes>
                <Route path="/" element={<History />} />
                <Route path="/history" element={<History />} />
                <Route path="/vision-mission" element={<VisionMission />} />
                <Route path="/board-of-directors" element={<BoardOfDirectors />} />
                <Route path="/previous-board" element={<PreviousBoard />} />
                <Route path="/branches" element={<Branches />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLayout;
