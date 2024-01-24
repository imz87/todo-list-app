import React from "react"
import { Tab, TabList, TabPanel, Tabs } from "react-tabs"
import "react-tabs/style/react-tabs.css"
import TodoListTable from "./TodoListTable"

function TodoListTabs() {
    return (
        <Tabs>
            <TabList>
                <Tab>To Do</Tab>
                <Tab>Done Tasks</Tab>
            </TabList>
            <TabPanel>
                <div>
                    <TodoListTable done={false} />
                </div>
            </TabPanel>
            <TabPanel>
                <div>
                    <TodoListTable done={true} />
                </div>
            </TabPanel>
        </Tabs>
    )
}

export default TodoListTabs
