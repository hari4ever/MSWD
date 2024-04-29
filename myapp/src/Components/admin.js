import './admin.css';
function createDashboard() {
    const state = {
      activeTab: 'users',
    };
  
    // function showTab(tabName) {
    //   state.activeTab = tabName;
    //   updateTabs();
    // }
  
    function updateTabs() {
      const tabs = document.querySelectorAll('.tab-content');
      tabs.forEach(function (tab) {
        tab.style.display = 'none';
      });
  
      const selectedTab = document.getElementById(state.activeTab);
      if (selectedTab) {
        selectedTab.style.display = 'block';
      }
    }
  
    function init() {
      const dashboardContainer = document.createElement('div');
      dashboardContainer.className = 'dashboard-container';
  
      const sidebar = document.createElement('div');
      sidebar.className = 'sidebar';
      sidebar.innerHTML = `
        <h2>Admin Dashboard</h2>
        <ul>
          <li><a href="#" onclick="showTab('users')">Manage Users</a></li>
          <li><a href="#" onclick="showTab('show users')">Show users</a></li>
          <li><a href="#" onclick="showTab('reports')">Reports</a></li>
        </ul>
      `;
      dashboardContainer.appendChild(sidebar);
  
      const mainContent = document.createElement('div');
      mainContent.className = 'main-content';
      mainContent.innerHTML = `
        <div id="users" class="tab-content">
          <h3></h3>
          <!-- Add your HTML content for user management -->
        </div>
  
        <div id="appointments" class="tab-content">
          <h3>Appointments</h3>
          <!-- Add your HTML content for appointments -->
        </div>
  
        <div id="reports" class="tab-content">
          <h3>Reports</h3>
          <!-- Add your HTML content for reports -->
        </div>
      `;
      dashboardContainer.appendChild(mainContent);
  
      document.body.appendChild(dashboardContainer);
  
      // Initialize tabs
      updateTabs();
    }
  
    return {
      init,
    };
  }
  
  const dashboard = createDashboard();
  dashboard.init();