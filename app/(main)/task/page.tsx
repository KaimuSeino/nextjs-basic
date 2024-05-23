import { Task } from "@/app/api/tasks/route"

const getTasks = async () => {
  const response = await fetch("http://localhost:3000/api/tasks",
    { method: "GET", cache: "no-store" } // JSではパフォーマンス向上のために可能な限りキャッシュを利用しているが、
  )// データ更新頻度の高いアプリケーションを構築する際には注意が必要
  return await response.json()
}

const TaskPage = async () => {
  const tasks = (await getTasks()).tasks as Task[]

  return (
    <div>
      Task Page
      <div>
        {tasks.map((task) => (
          <div key={task.id}>{task.name}</div>
        ))}
      </div>
    </div>
  );
}

export default TaskPage; // ページコンポーネントはデフォルトexportする