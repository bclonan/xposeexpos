<template>
    <div class="content column is-11">

        <!-- Breadcrumbs -->
        <nav class="breadcrumbs">
            <ul>
                <li>
                    <router-link to="/main">Home</router-link>
                </li>
                <li>Team</li>
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



                                <div class="navigation-tabs layout-tabs animated-tabs mt-20 mb-20">
                                    <div class="tabs is-toggle is-fullwidth">
                                        <ul>
                                            <li class="tab-link" @click="setTheActiveTab('teamFeed')" :class="[ isTabActiveNow === 'teamFeed' ? 'is-active' : '']">
                                                <a>Feed</a>
                                            </li>
                                            <li class="tab-link" @click="setTheActiveTab('teamProjects')" :class="[ isTabActiveNow === 'teamProjects' ? 'is-active' : '']">
                                                <a>Projects</a>
                                            </li>
                                            <li class="tab-link" @click="setTheActiveTab('teamMembers')" :class="[ isTabActiveNow === 'teamMembers' ? 'is-active' : '']">
                                                <a>Members</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="navtab-content" :class="[ isTabActiveNow === 'teamFeed' ? 'is-active' : '']">

                                        <!-- Projects Group -->
                                        <div class="projects-list-wrapper">
                                            <div class="list-header">
                                                <div class="list-title">
                                                    <span>New Team</span>

                                                </div>

                                            </div>
                                            <div class="list-body">
                                                <div class="columns is-multiline">
                                                    <div class="column is-8 is-offset-2">
                                                        <div class="flex-card light-bordered light-raised">
                                                            <div class="card-body">
                                                                <h2 class="title is-4 text-bold mb-20">Team Info</h2>
                                                                <form>
                                                                    <div class="columns mt-50">
                                                                        <div class="column">
                                                                            <div class="control">
                                                                                <label>Team Name</label>
                                                                                <input class="input is-medium mt-5"
                                                                                    type="text">
                                                                            </div>
                                                                            <div class="control">
                                                                                <label>Team Category</label>
                                                                                <div class="mt-5"></div>
                                                                                <select class="chosen-select"
                                                                                    data-placeholder="Project category"
                                                                                    style="display: none;">
                                                                                    <option label="Project category"></option>
                                                                                    <option>Marketing</option>
                                                                                    <option>Sales</option>
                                                                                    <option>Support</option>
                                                                                </select>
                                                                                <div class="chosen-container chosen-container-single chosen-container-single-nosearch"
                                                                                    title="" style="width: 100%;"><a
                                                                                        class="chosen-single chosen-default">
                                                                                        <input class="chosen-focus-input"
                                                                                            type="text" autocomplete="off"
                                                                                            readonly="">
                                                                                        <span>Project category</span>
                                                                                        <div><b></b></div>
                                                                                    </a>
                                                                                    <div class="chosen-drop">
                                                                                        <div class="chosen-search">
                                                                                            <input class="chosen-search-input"
                                                                                                type="text"
                                                                                                autocomplete="off"
                                                                                                readonly="">
                                                                                        </div>
                                                                                        <ul class="chosen-results"></ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="column">
                                                                            <div class="control">
                                                                                <label>Team Tagline</label>
                                                                                <input class="input is-medium mt-5"
                                                                                    type="text">
                                                                            </div>
                                                                            <div class="control">
                                                                                <label>Listing Status</label>
                                                                                <div class="mt-5"></div>
                                                                                <select class="chosen-select"
                                                                                    data-placeholder="Project type"
                                                                                    style="display: none;">
                                                                                    <option label="Project type"></option>
                                                                                    <option>Kanban</option>
                                                                                    <option>Scrum</option>
                                                                                    <option>List</option>
                                                                                </select>
                                                                                <div class="chosen-container chosen-container-single chosen-container-single-nosearch"
                                                                                    title="" style="width: 100%;"><a
                                                                                        class="chosen-single chosen-default">
                                                                                        <input class="chosen-focus-input"
                                                                                            type="text" autocomplete="off"
                                                                                            readonly="">
                                                                                        <span>Listing Status</span>
                                                                                        <div><b></b></div>
                                                                                    </a>
                                                                                    <div class="chosen-drop">
                                                                                        <div class="chosen-search">
                                                                                            <input class="chosen-search-input"
                                                                                                type="text"
                                                                                                autocomplete="off"
                                                                                                readonly="">
                                                                                        </div>
                                                                                        <ul class="chosen-results"></ul>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="columns mt-10">
                                                                        <div class="column">
                                                                            <div class="control">
                                                                                <textarea class="textarea is-grow" rows="5"
                                                                                    placeholder="Enter a team description ..."></textarea>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="mt-30">
                                                                        <button class="button btn-align no-lh raised primary-btn">Create</button>
                                                                        <button class="button is-link no-lh">Cancel</button>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="navtab-content" :class="[ isTabActiveNow === 'teamProjects' ? 'is-active' : '']">


                                        <!-- Projects Group -->
                                        <div class="projects-list-wrapper">
                                            <div class="list-header">
                                                <div class="list-title">
                                                    <span>Team Invites</span>

                                                </div>

                                            </div>
                                            <div class="list-body">
                                                <div class="columns is-multiline">
                                                    <div class="column is-4">
                                                        <div class=" flex-card light-bordered light-raised">

                                                            <div class="card-content">
                                                                <div class="info-block mt-40">
                                                                    <h4>Team Name</h4>
                                                                    <p>Team description</p>
                                                                </div>
                                                                <div class="level mb-40 mt-40">
                                                                    <div class="level-item">
                                                                        <a class="button button-cta btn-outlined is-bold">Deny</a>
                                                                    </div>
                                                                    <div class="level-item">
                                                                        <a class="button button-cta btn-outlined is-bold primary-btn">Accept</a>
                                                                    </div>


                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>


                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="navtab-content" :class="[ isTabActiveNow === 'teamMembers' ? 'is-active' : '']">


                                        <!-- Projects Group -->
                                        <div class="projects-list-wrapper">
                                            <div class="list-header">
                                                <div class="list-title">
                                                    <span>Search Teams</span>

                                                </div>

                                            </div>
                                            <div class="list-body">
                                                <div class="columns is-multiline">
                                                    <OpenTeams />
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
//Components
import OpenTeams from "@/components/Main/Pages/collaborate/Includes/OpenTeams";

//Mixins
import { activeModalToggle } from "@/components/Main/Mixins/activeModalToggle.js";
import { activeTabMixin } from "@/components/Main/Mixins/activeTabMixin.js";

export default {
  name: "DashTeamMain",
  mixins: [activeModalToggle, activeTabMixin],
  data() {
    return {
      activeTabChosen: "teamFeed"
    };
  },
  components: {
    OpenTeams
  }
};
</script>

<style>
</style>