<template>
  <div class="container">
    <h2 style="text-align: center">About</h2>
    <h3>Description</h3>
    <p>
      The
      <strong>Task Tracker</strong>
      app's purpose is to memorize tasks and notify the user of his task if a reminder is set.
    </p>
    <h3>Task ordering</h3>
    <p>Tasks are ordered by:</p>
    <ul>
      <li>incomplete then complete</li>
      <li>incomplete chronologically ascending</li>
      <li>complete chronologically descending</li>
      <li>for chronology reminder date is prioritised before the creation date</li>
    </ul>
    <h3>Keyboard shortcuts</h3>
    <ul>
      <li>
        <strong>Enter -</strong>confirms or submitts forms.
      </li>
      <li>
        <strong>Esc -</strong>closes or cancels
      </li>
      <li>
        <strong>Ctrl + Space -</strong>triggers the add new item button wherever it's available.
      </li>
      <li>
        <strong>Ctrl + O -</strong>toggles task list ordering on the task lists/home page.
      </li>
      <li>
        <strong>
          Ctrl + Alt +
          <a href="#position-def">position*</a> -
        </strong>in the task lists or in task list page it will go to the
        <i>Edit task list/Edit Task</i> page for the task list/task at the specified position.
      </li>
      <li>
        <strong>
          Alt +
          <a href="#position-def">position*</a> -
        </strong>opens the confirm deletion dialog box to confirm the deletion of the
        <i>task list/task</i> at the specified position.
      </li>
    </ul>
    <span id="position-def">
      position
      <i
        style="font-size:14px"
      >- the position of the element in the list. First position is 1.</i>
    </span>
  </div>
</template>

<script src="./about.js"></script>
<style scoped src="./about.css"></style>