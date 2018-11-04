<template>
    <div class="content column is-11">

        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/main">Home</router-link>
                </li>
                <li>Tasks</li>
            </ul>
        </nav>
        <!-- /Breadcrumbs -->

        <!-- Dashboard Wrapper -->
        <div class="dashboard-wrapper">

            <div class="columns">
                <div class="column">
                    <!-- Main content -->
                    <div  class="section-wrapper">
                        <!-- Dashboard content -->
                        <!-- Dashboard content -->
                        <div class="columns dashboard-columns">

                            <div class="column"></div>

                            <div class="column is-11">

                                <div class="profile-heading">
                                    <img src="https://via.placeholder.com/250x250">
                                    <div>
                                        <h2 class="project-title">My Tasks</h2>
                                        <h4 class="project-tagline">My teams, projects, and tasks assigned to me.</h4>
                                    </div>
                                </div>

                                <div class="navigation-tabs layout-tabs animated-tabs mt-20 mb-20">
                                    <div class="tabs is-toggle is-fullwidth">
                                        <ul>
                                            <li class="tab-link" @click="setTheActiveTab('myCalendar')" :class="[ isTabActiveNow === 'myCalendar' ? 'is-active' : '']">
                                                <a>Calendar</a>
                                            </li>
                                            <li class="tab-link" @click="setTheActiveTab('myCategories')" :class="[ isTabActiveNow === 'myCategories' ? 'is-active' : '']">
                                                <a>Categories</a>
                                            </li>
                                            <li class="tab-link" @click="setTheActiveTab('myToday')" :class="[ isTabActiveNow === 'myToday' ? 'is-active' : '']">
                                                <a>Today</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="navtab-content" :class="[ isTabActiveNow === 'myCalendar' ? 'is-active' : '']">

                                        <!-- Projects Group -->
                                        <div class="projects-list-wrapper">
                                            <div class="list-header">
                                                <div class="list-title">
                                                    <span>Calendar</span>
                                                    <div class="add-button modal-trigger" @click="setActiveModal('createTaskModal')">
                                                        <i class="material-icons">add</i>
                                                    </div>
                                                </div>
                                                <div class="list-filter">
                                                    <div class="control">
                                                        <input class="input is-medium is-rounded" type="text" placeholder="Filter Teams">
                                                        <span class="material-icons">filter_list</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="list-body">
                                                <div class="columns is-multiline">

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="navtab-content" :class="[ isTabActiveNow === 'myCategories' ? 'is-active' : '']">

                                        <!-- Projects Group -->
                                        <div class="projects-list-wrapper">
                                            <div class="list-header">
                                                <div class="list-title">
                                                    <span>Categories</span>
                                                    <div class="add-button modal-trigger" data-modal="create-project-modal">
                                                        <i class="material-icons">add</i>
                                                    </div>
                                                </div>
                                                <div class="list-filter">
                                                    <div class="control">
                                                        <input class="input is-medium is-rounded" type="text" placeholder="Filter Projects">
                                                        <span class="material-icons">filter_list</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="list-body">
                                                <div class="columns is-multiline">
                                                    <!-- Project card -->
                                                    <div class="columns is-vcentered">
                                                        <div class="column is-8 is-offset-2">
                                                            <!-- Large Calendar -->
                                                            <div class="calendar is-large is-centered is-custom">
                                                                <!-- Header -->
                                                                <div class="calendar-nav">
                                                                    <!-- Previous -->
                                                                    <div class="calendar-nav-previous-month">
                                                                        <button class="button is-text">
                                                                            <i class="fa fa-chevron-left"></i>
                                                                        </button>
                                                                    </div>
                                                                    <div>March 2017</div>
                                                                    <!-- Next -->
                                                                    <div class="calendar-nav-next-month">
                                                                        <button class="button is-text">
                                                                            <i class="fa fa-chevron-right"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <!-- Container -->
                                                                <div class="calendar-container">
                                                                    <!-- Days -->
                                                                    <div class="calendar-header">
                                                                        <div class="calendar-date">Sun</div>
                                                                        <div class="calendar-date">Mon</div>
                                                                        <div class="calendar-date">Tue</div>
                                                                        <div class="calendar-date">Wed</div>
                                                                        <div class="calendar-date">Thu</div>
                                                                        <div class="calendar-date">Fri</div>
                                                                        <div class="calendar-date">Sat</div>
                                                                    </div>
                                                                    <!-- Body -->
                                                                    <div class="calendar-body">
                                                                        <div class="calendar-date is-disabled">
                                                                            <button class="date-item">26</button>
                                                                        </div>
                                                                        <div class="calendar-date is-disabled">
                                                                            <button class="date-item">27</button>
                                                                            <div class="calendar-events">
                                                                                <a class="calendar-event">Default event</a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="calendar-date is-disabled">
                                                                            <button class="date-item">28</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">1</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">2</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">3</button>
                                                                        </div>
                                                                        <div class="calendar-date tooltip" data-tooltip="Today">
                                                                            <button class="date-item is-today">4</button>
                                                                        </div>
                                                                        <div class="calendar-date" disabled="">
                                                                            <button class="date-item">5</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">6</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">7</button>
                                                                        </div>
                                                                        <div class="calendar-date tooltip" data-tooltip="You have appointments">
                                                                            <button class="date-item badge">8</button>
                                                                            <div class="calendar-events">
                                                                                <a class="calendar-event is-primary">Primary event</a>
                                                                                <a class="calendar-event is-warning">Warning event</a>
                                                                                <a class="calendar-event is-danger">Danger event</a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">9</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">10</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">11</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">12</button>
                                                                            <div class="calendar-events">
                                                                                <a class="calendar-event">Default event</a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">13</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">14</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">15</button>
                                                                        </div>
                                                                        <div class="calendar-date calendar-range calendar-range-start">
                                                                            <button class="date-item is-active">16</button>
                                                                        </div>
                                                                        <div class="calendar-date calendar-range">
                                                                            <button class="date-item">17</button>
                                                                        </div>
                                                                        <div class="calendar-date calendar-range">
                                                                            <button class="date-item">18</button>
                                                                        </div>
                                                                        <div class="calendar-date calendar-range">
                                                                            <button class="date-item">19</button>
                                                                        </div>
                                                                        <div class="calendar-date calendar-range calendar-range-end">
                                                                            <button class="date-item is-active">20</button>
                                                                            <div class="calendar-events">
                                                                                <a class="calendar-event is-success">Success event</a>
                                                                            </div>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">21</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">22</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">23</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">24</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">25</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">26</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">27</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">28</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">29</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">30</button>
                                                                        </div>
                                                                        <div class="calendar-date">
                                                                            <button class="date-item">31</button>
                                                                        </div>
                                                                        <div class="calendar-date is-disabled">
                                                                            <button class="date-item">1</button>
                                                                            <div class="calendar-events">
                                                                                <a class="calendar-event">Second default event</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="navtab-content" :class="[ isTabActiveNow === 'myToday' ? 'is-active' : '']">

                                        <!-- Acticity List -->
                                        <div class="projects-list-wrapper">
                                            <div class="list-header">
                                                <div class="list-title">
                                                    <span>Today</span>
                                                    <div class="add-button modal-trigger" data-modal="create-task-modal">
                                                        <i class="material-icons">add</i>
                                                    </div>
                                                </div>
                                                <div class="list-filter">
                                                    <div class="control">
                                                        <input class="input is-medium is-rounded" type="text" placeholder="Filter Tasks">
                                                        <span class="material-icons">filter_list</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="list-body">
                                                <div class="columns is-multiline">
                                                    <div class="column">

                                                        <!-- Task group -->
                                                        <div class="tasks-wrapper">
                                                            <div class="header">
                                                                <h4 class="no-margin-bottom">Assigned Tasks
                                                                    <small>(3)</small>
                                                                </h4>

                                                                <!-- Task wrapper dropdown -->
                                                                <div class="dropdown is-right dropdown-trigger">
                                                                    <div class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                                                        <span class="material-icons">more_vert</span>
                                                                    </div>

                                                                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                                                        <div class="dropdown-content">
                                                                            <a href="#" class="dropdown-item">
                                                                                Rename
                                                                            </a>
                                                                            <a class="dropdown-item">
                                                                                Archive
                                                                            </a>
                                                                            <hr class="dropdown-divider">
                                                                            <a href="#" class="dropdown-item is-flex">
                                                                                <span class="material-icons">add</span>
                                                                                Add Task
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <!-- Task Card -->
                                                            <div class="task-card">
                                                                <div class="card-progress" data-progress="83"></div>
                                                                <div class="card-inner">
                                                                    <div class="task-meta">
                                                                        <span class="task-title">
                                                                            Project documents review
                                                                        </span>
                                                                        <span class="task-due-date">
                                                                            5 days remaining
                                                                        </span>
                                                                    </div>
                                                                    <div class="task-info">
                                                                        <div class="task-members">
                                                                            <div class="face">
                                                                                <img src="https://via.placeholder.com/250x250">
                                                                            </div>

                                                                        </div>
                                                                        <div class="subtasks-count">
                                                                            <i class="sl sl-icon-check"></i>
                                                                            <span>7/9</span>
                                                                        </div>
                                                                        <div class="more-drop">
                                                                            <!-- Task dropdown -->
                                                                            <div class="dropdown is-right dropdown-trigger">
                                                                                <div class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                                                                    <span class="material-icons">more_vert</span>
                                                                                </div>

                                                                                <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                                                                    <div class="dropdown-content">
                                                                                        <a href="#" class="dropdown-item">
                                                                                            Edit
                                                                                        </a>
                                                                                        <a class="dropdown-item">
                                                                                            Settings
                                                                                        </a>
                                                                                        <hr class="dropdown-divider">
                                                                                        <a href="#" class="dropdown-item is-flex">
                                                                                            <span class="material-icons">person_add</span>
                                                                                            Invite
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <!-- /Task Group -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="column"></div>

                        </div>
                        <!-- /Dashboard content -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { activeModalToggle } from "@/components/Main/Mixins/activeModalToggle.js";

import { activeTabMixin } from "@/components/Main/Mixins/activeTabMixin.js";

export default {
  name: "DashTasksMain",
  mixins: [activeModalToggle, activeTabMixin],
  data() {
    return {
      activeTabChosen: "myCalendar"
    };
  }
};
</script>

<style>
</style>
