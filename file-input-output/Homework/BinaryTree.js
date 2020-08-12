class BinaryTree {
  constructor(array) {
    this.array = array;
  }

  preorder() {
    const preRecursive = i => {
      if (this.array[i] === undefined) return;
      console.log(this.array[i]);

      preRecursive(i * 2 + 1);
      preRecursive(i * 2 + 2);
      return;
    }
    preRecursive(0);
  }

  inorder() {
    const inRecursive = i => {
      if (this.array[i] === undefined) return;
      inRecursive(i * 2 + 1)
      console.log(this.array[i]);
      inRecursive(i * 2 + 2)
    }
    inRecursive(0);
  }

  postorder() {
    const postRecursive = i => {
      if (this.array[i * 2 + 1] === undefined) {
        if (!this.array[i]) return;
        console.log(this.array[i]);
        return;
      }
      postRecursive(i * 2 + 1)
      postRecursive(i * 2 + 2)
      console.log(this.array[i])
    }
    postRecursive(0);
  }

  bfs(value) {
    for (let i = 0; i < this.array.length; i++) {
      if (value === this.array[i]) return true;
    }
    return false;
  }

  dfs(value) {
    let answer = false
    const dfsRecursive = i => {
      if (value === +this.array[i]) {
        answer = true;
        return;
      }
      if (this.array[i] === undefined) return;
      dfsRecursive(i * 2 + 1);
      dfsRecursive(i * 2 + 2);
      return;
    }
    dfsRecursive(0);
    return answer
  }

}

tree = new BinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


tree.inorder()