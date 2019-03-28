import React from 'react'

const UserTable = props => {
  const handlerDelete = id => {
    let answer = window.confirm('Are you sure?')
    if (answer) {
      props.deleteUser(id)
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button
                  className="button muted-button"
                  onClick={() => props.editRow(user)}
                >
                  Edit
                </button>
                <button
                  className="button muted-button"
                  onClick={() => handlerDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}
export { UserTable }
