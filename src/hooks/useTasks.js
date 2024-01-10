import {useMemo} from "react";

export const useSortedTasks = (tasks, sort) => {
    const getSortedTasks = useMemo(() => {
        if(sort) {
            return ([...tasks].sort((a, b) => a[sort].localeCompare(sort)))
        }
        return tasks
    }, [tasks, sort])

    return getSortedTasks
}

export const useTasks = (tasks, sort, query) => {
    const getSortedTasks = useSortedTasks(tasks, sort)
    const sortedAndSearchedTasks = useMemo(() => {
        return getSortedTasks.filter(task => task.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, getSortedTasks])
    return sortedAndSearchedTasks
}