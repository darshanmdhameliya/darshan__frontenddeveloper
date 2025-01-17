import { user } from "../App"

const ComC = () => {
  return (
    <div>
      <user.Consumer>
        {
          (item) => {
            return (
              <span>{item.users}</span>
            )
          }
        }
      </user.Consumer>
    </div>
  )
}

export default ComC
