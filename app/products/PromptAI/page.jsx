import Feed from '@components/Feed';

function PromptAI() {
    return (
        <section className="w-full flex-center flex-col">
          <h1 className="head_text text-center">
            Discover & Share
            <br className="max-md:hidden"/>
            <span className="text-center orange_gradient"> AI-Powered Prompts </span>
          </h1>
          <p className='desc text-center'>
            PromptAI is an open-source AI prompting tool for modern world, which can be used 
            to discover, create and share the creative AI prompts
          </p>
          <Feed />
        </section>
      )
}

export default PromptAI