import AppHeader from "./AppHeader";
import Dashboard from "./Dashboard";
import Applications from "./Applications";
import Course from "./Course";
import Jobs from "./jobs/Jobs";
import { Route, Switch } from "react-router-dom";


const App = () => {
  return (
    <>
      <nav className="navbar  sticky-top bg-light flex-md-nowrap p-0 ">
        <a
          className="navbar-brand col-md-3 col-lg-2 mr-0 px-3"
          href="www.google.co.uk"
        >
          React Test
        </a>
        <button
          className="navbar-toggler position-absolute d-md-none collapsed"
          type="button"
          data-toggle="collapse"
          data-target="#sidebarMenu"
          aria-controls="sidebarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <AppHeader />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="/">
              Sign out
            </a>
          </li>
        </ul>
      </nav>
      <div className="container-fluid border-top">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="sidebar-sticky pt-3">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="/" className="nav-link active">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/active-jobs" className="nav-link active">
                    Jobs
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/course" className="nav-link active">
                    Courses
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
            <Switch>
              <Route exact path='/course'>
                <Course />
              </Route>
              <Route exact path='/active-jobs'>
                <Jobs />
              </Route>
              <Route exact path='/active-jobs/:jobtitle/:id'>
                <Applications />
              </Route>
              <Route exact path='/'>
                <Dashboard />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
