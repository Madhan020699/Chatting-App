import 'bootstrap/dist/css/bootstrap.min.css';

import './TestPage.css';

const HomePage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-4 col-lg-3 bg-light vh-100 overflow-auto p-3">
          <h2 className="text-center">ChatBuZZ</h2>
          <div className="list-group">
            {Array.from({ length: 10 }).map((_, index) => (
              <button
                key={index}
                type="button"
                className="list-group-item list-group-item-action"
              >
                <div className="d-flex align-items-center">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                    className="rounded-circle me-3"
                  />
                  <span>Madhan Kumar</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-md-8 col-lg-9 p-5">
          <div className="d-flex align-items-center">
            <img
              src="https://via.placeholder.com/80"
              alt="User Avatar"
              className="rounded-circle me-4"
            />
            <h2>Madhan Kumar</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
