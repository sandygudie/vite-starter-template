import tw from 'twin.macro'

const Docs = () => {
  return (
    <div
      css={[
        tw`flex justify-center items-center`,
        tw`p-4`,
        tw`text-center`,
        tw`bg-blue-500`,
        tw`min-h-screen`,
      ]}
    >
      <p tw="text-gray-500">heading 1</p>
      <p>heading 2</p>
      <p>heading 3</p>
      <p>heading 4</p>
    </div>
  )
}

export default Docs
