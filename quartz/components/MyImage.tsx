import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const MyImage: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={`my-image ${displayClass}`}>
      <img src="/static/icon.png" alt="My Image" />
    </div>
  )
}

export default (() => MyImage) satisfies QuartzComponentConstructor