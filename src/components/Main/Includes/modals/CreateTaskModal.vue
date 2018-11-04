<template>
    <!-- Create Project Modal -->
    <div class="modal create-task-modal modal-hero " v-if="activeModalOverlayToggled === 'createTaskModal'" :class="[ activeModalOverlayToggled === 'createTaskModal' ? 'is-active' : '']">
        <div class="modal-background scaleInCircle"></div>
        <div class="modal-content scaleIn">
            <div class="flex-card simple-shadow">
                <h2 class="has-text-centered dark-text">New Task</h2>
                <div class="navigation-tabs layout-tabs animated-tabs">
                    <div class="tabs is-toggle is-fullwidth no-margin-bottom">
                        <ul>
                            <li class="tab-link" @click="setTheActiveTab('taskDetails')" :class="[ isTabActiveNow === 'taskDetails' ? 'is-active' : '']">
                                <a>Details</a>
                            </li>
                            <li class="tab-link" @click="setTheActiveTab('taskMembers')" :class="[ isTabActiveNow === 'taskMembers' ? 'is-active' : '']">
                                <a>Members</a>
                            </li>
                        </ul>
                    </div>

                    <div class="navtab-content" :class="[ isTabActiveNow === 'taskDetails' ? 'is-active' : '']">
                        <div class="card-body">
                            <div class="content">
                                <!-- New Project form -->
                                <form>

                                    <div class="field mb-10">
                                        <label class="label dark-text">Due Date</label>
                                        <div class="columns is-vcentered is-fieldset">
                                            <div class="column is-3">
                                                <div class="field-label">Start date*</div>
                                            </div>
                                            <div class="column is-9">
                                                <div class="control has-icons-right">
                                                    <input data-toggle="datepicker" type="text" class="input is-medium" placeholder="Start Date">
                                                    <span class="icon is-right is-medium">
                                                        <i class="im im-icon-Calendar-4"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="columns is-fieldset">
                                            <div class="column is-3">
                                                <div class="field-label">End Date*</div>
                                            </div>
                                            <div class="column is-9">
                                                <div class="control has-icons-right">
                                                    <input data-toggle="datepicker" type="text" class="input is-medium" placeholder="End Date">
                                                    <span class="icon is-right is-medium">
                                                        <i class="im im-icon-Calendar-4"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="field mb-10">
                                        <label class="label dark-text">Task Meta</label>
                                        <div class="columns is-vcentered is-fieldset">
                                            <div class="column is-3">
                                                <div class="field-label">Task Title*</div>
                                            </div>
                                            <div class="column is-9">
                                                <input type="text" class="input is-medium">
                                            </div>
                                        </div>
                                        <div class="columns is-fieldset">
                                            <div class="column is-3">
                                                <div class="field-label">Description*</div>
                                            </div>
                                            <div class="column is-9">
                                                <textarea class="textarea" rows="4"></textarea>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-footer">
                                        <button type="submit" class="button is-modal">Create Task</button>
                                    </div>

                                </form>
                                <!-- /New Project form -->
                            </div>
                        </div>
                    </div>

                    <div class="navtab-content" :class="[ isTabActiveNow === 'taskMembers' ? 'is-active' : '']">

                        <div class="project-members">
                            <div class="face">
                                <img src="https://via.placeholder.com/250x250">
                            </div>
                        </div>

                        <div class="modal-filter">
                            <div class="control">
                                <input class="input is-medium is-rounded" type="text" placeholder="Filter Members">
                                <span class="material-icons">filter_list</span>
                            </div>
                        </div>

                        <div class="card-body">
                            <div class="members-select">
                                <div class="member-row">
                                    <img src="https://via.placeholder.com/250x250">
                                    <span>Eric Daniels</span>
                                    <div class="b-checkbox is-secondary">
                                        <input class="styled" type="checkbox" checked>
                                        <label for="user1"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <button class="modal-close" @click="resetActiveModalOverlay" :class="[ activeModalOverlayToggled === 'createTaskModal' ? 'is-large' : 'is-hidden']" aria-label="close"></button>
    </div>
    <!-- Reminder Modal -->
</template>

<script>
    import { activeModalToggle } from "@/components/Main/Mixins/activeModalToggle.js";
    import { activeTabMixin } from "@/components/Main/Mixins/activeTabMixin.js";
    export default {
      name: "CreateTaskModal",
      mixins: [activeModalToggle, activeTabMixin],
      data() {
        return {
          activeTabChosen: "taskDetails"
        };
      }
    };
</script>