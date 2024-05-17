let tasks = [
    {
        id: 'Task 1',
        name: 'Buy hosting',
        start: '2024-05-22',
        end: '2024-05-23',
        progress: 100,
    },
    {
        id: 'Task 2',
        name: 'Draw wireframes',
        start: '2024-05-23',
        end: '2024-05-25',
        progress: 100,
    },
    {
        id: 'Task 3',
        name: 'Visual Design',
        start: '2024-05-25',
        end: '2024-05-27',
        progress: 20,
        dependencies: 'Task 2'
    },
    {
        id: 'Task 6',
        name: 'Final Submission',
        start: '2024-08-10',
        end: '2024-08-16',
        progress: 0,
        dependencies: 'Task 4, Task 5'
    },
]

let ganttChart = new Gantt("#gantt", tasks, {});
