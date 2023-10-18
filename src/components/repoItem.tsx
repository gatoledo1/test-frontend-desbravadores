import React from 'react'
import { timeSince } from '../utils/timeAgo'
import { Repository } from '../types/Repositories'

export const RepoItem = (props: Repository) => {
  const { owner, id, name, updated_at } = props

  return (
    <a
      href={`/repo/${owner.login}/${name}`}
      className="d-flex justify-content-between align-items-center list-group-item background-500"
      style={{ borderColor: "var(--blue-300)" }}
      key={id}
    >
      <span className="fs-5">{name}</span>
      <span className="text-blue">{timeSince(new Date(updated_at).getTime())} ago</span>
    </a>
  )
}
