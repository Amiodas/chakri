function Blog() {
  return (
    <div className="container mx-auto px-16 pt-4 pb-10">
      <div className="bg-slate-100 py-16 rounded-lg">
        <h1 className="text-2xl font-semibold text-slate-800 text-center py-16">
          Blog
        </h1>
      </div>
      <div className="my-10">
        <div>
          <h3 className="text-lg font-semibold">
            1. When should you use context API?
          </h3>
          <p className="mt-3">
            The Context API is a feature in React that allows you to share state
            data across multiple components without passing props explicitly at
            each level of the component tree. It is useful in scenarios where
            you have data or state that needs to be accessed by multiple
            components at different levels of the component hierarchy.
          </p>
          <p className="mt-2">
            Here are some situations where using the Context API can be
            beneficial:
          </p>
          <ol className="mt-3">
            <li>1. Prop Drilling</li>
            <li>2. Global State Management</li>
            <li>3. Theming and Styling</li>
            <li>4. Localization and Internationalization</li>
            <li>5. Authenticated User Data</li>
          </ol>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">
            2. What is react custom hook?
          </h3>
          <p className="mt-3">
            A React custom hook is a JavaScript function that starts with the
            prefix "use" and allows you to reuse stateful logic across different
            components. Custom hooks are a way to extract reusable logic from
            components and share it between multiple components without the need
            for inheritance or wrapping components in higher-order components.
          </p>
          <p className="mt-2">
            In React, hooks are functions that let you use state and other React
            features in functional components. While React provides built-in
            hooks like useState, useEffect, and useContext, custom hooks enable
            you to create your own reusable hooks specific to your application's
            requirements.
          </p>
          <p className="mt-3">
            To create a custom hook, you can follow these conventions:
          </p>
          <ol className="mt-3">
            <li>1. Function Name</li>
            <li>2. Logic Extraction</li>
            <li>3. Hook API</li>
            <li>4. Return Values</li>
          </ol>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">3. What is use of useRef?</h3>
          <p className="mt-3">
            The useRef hook in React allows you to create a mutable reference to
            a value or a DOM element. It provides a way to persist values across
            re-renders of a component without triggering a re-render itself. The
            useRef hook is primarily used for the following purposes:
          </p>
          <ol className="mt-3">
            <li>1. Referencing DOM Elements</li>
            <li>2. Preserving Values across Renders</li>
            <li>3. Preserving Values across Function Calls</li>
          </ol>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold">4. What is use of useMemo?</h3>
          <p className="mt-3">
            The useMemo hook in React is used to memoize the result of a
            function or an expensive computation. It allows you to optimize the
            performance of your application by caching the value and returning
            it whenever the dependencies of the memoized value remain the same.
          </p>
          <p className="mt-2">
            The useMemo hook takes two arguments: a function and an array of
            dependencies. It returns a memoized value that is recalculated only
            when the dependencies change. If the dependencies remain the same
            between re-renders, the previously calculated value is returned,
            saving unnecessary computations.
          </p>
          <p className="mt-3">
            Let's explore a few use cases for the useMemo hook:
          </p>
          <ol className="mt-3">
            <li>1. Performance Optimization</li>
            <li>2. Avoiding Unnecessary Renderings</li>
            <li>3. Avoiding Expensive Propagation</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Blog;
