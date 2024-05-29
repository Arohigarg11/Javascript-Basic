function getgit(callback) {
  setTimeout(() => {
    const git = "⚡ ";
    console.log("we learnt git", git);
    callback(git);
  }, 5000);
}

function learnlinux(git, callback) {
  setTimeout(() => {
    const linux = git + " linux";
    console.log("git is ready and here learn linux m", linux);
    callback(linux);
  }, 10000);
}

function learngitlinux(git, linux, callback) {
  setTimeout(() => {
    const mongodb = git + linux + " mongodb";
    console.log("mongocommunity is ready", mongodb);
    callback(mongodb);
  }, 15000);
}
function learnfrontend(git, linux,mongodb, callback) {
  setTimeout(() => {
    const frontend = git + linux + mongodb+ " frontend";
    console.log("frontend is ready", frontend);
    callback(frontend);
  }, 15000);
}


getgit((git) => {
  learnlinux(git, (linux) => {
    learngitlinux(git, linux, (mongodb) => {
      learnfrontend(git, linux, mongodb, (frontend) => {
        console.log("my webpage is ready");
      });  
    });
  });
});


// to make allo kulcha
// 1. allo
// 2. makedough
// 3. makeallokulche