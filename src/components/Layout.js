import React, { useState } from 'react';
import Projects from './Projects';
import People from './People';
import Timereports from './Timereports';
import FilterProjects from './ActiveProjects';
import AddPersonForm from './AddPersonFrom';

const Layout = () => {
  const [userChoice, setuserChoice] = useState(null);

  const handleSelectChange = (event) => {
    setuserChoice(event.target.value);
  };

  const renderUserChoice = () => {
    switch (userChoice) {
      case 'projects':
        return <Projects />;
      case 'people':
        return <People />;
      case 'timereports':
        return <Timereports />;
      case 'filterprojects':
        return <FilterProjects/>
      case 'addpeople':
        return <AddPersonForm/>
      default:
        return null;
    }
  };

  return (
    <>
      <nav style={{display:"grid", width:"auto",fontSize:"1.2em"}}>
        <label htmlFor="componentDropdown" style={{fontSize:""}}>Choose function from dropdown list:</label>
        <select id="componentDropdown" onChange={handleSelectChange}>
          <option value="">Choose..</option>
          <option value="projects">Projects</option>
          <option value="people">People</option>
          <option value="timereports">Timereports</option>
          <option value="filterprojects">Filter Projects</option>
          <option value="addpeople">Add people</option>
        </select>
      </nav>

      {renderUserChoice()}
    </>
  );
};

export default Layout;
