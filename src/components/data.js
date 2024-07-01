export const generateData = () => {
    const data = {
      name: "Root",
      children: []
    };
  
    for (let i = 0; i < 100; i++) { // Increase the number of branches
      const branch = {
        name: `Branch ${i}`,
        children: []
      };
  
      for (let j = 0; j < 100; j++) { // Increase the number of employees per branch
        branch.children.push({
          name: `Employee ${i * 100 + j}`,
          position: `Position ${i * 100 + j}`
        });
      }
  
      data.children.push(branch);
    }
  
    return data;
  };
export default generateData  