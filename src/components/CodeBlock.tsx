// components/CodeBlock.js

import React from 'react';



const CodeBlock = () => {
  return (
    <pre className="bg-gray-800 text-white p-4 rounded-md overflow-x-auto">
      <code className="language-python">
        
            string first = "welcome Devlopers";
            String last = "happy coding"
        
      </code>
    </pre>
  );
};

export default CodeBlock;
