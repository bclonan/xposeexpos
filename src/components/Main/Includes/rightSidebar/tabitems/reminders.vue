<template>
    <!-- Reminders tab -->
    <div class="navtab-content is-active">
        <div class="panel-title">
            <h3>REMINDERS</h3>
            <i class="material-icons modal-trigger ml-auto" data-toggle="tooltip" data-placement="left" data-title="Add reminder" @click="setActiveModal('createReminderModal')">add</i>
        </div>
        <!-- Reminders list -->
        <ol class="reminders-list">
            <!-- Reminders -->
            <li>
                <!-- Reminder -->
                <div class="reminder">
                    <div class="info">
                        <i class="fa fa-circle is-low"></i>
                        <span>
                            <i class="im im-icon-Calendar-4"></i>
                        </span>
                        <span class="date"> Today</span>
                    </div>
                    <div class="reminder-content">
                        Review the number of subscriptions before ICO
                    </div>
                    <div class="reminder-controls">
                        <i class="sl sl-icon-settings" data-toggle="tooltip" data-placement="top" data-title="Edit"></i>
                        <i class="sl sl-icon-trash" data-toggle="tooltip" data-placement="top" data-title="Delete"></i>
                    </div>
                </div>
            </li>
        </ol>
        <!-- /Reminders list -->
    </div>
    <!-- /Reminders tab -->
</template>

<script>
    import { activeModalToggle } from "@/components/Main/Mixins/activeModalToggle.js";
    export default {
      name: "RemindersTab",
      mixins: [activeModalToggle]
    };
</script>