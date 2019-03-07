workflow "Install, Build and Deploy" {
  on = "push"
  resolves = [
    "Deploy",
  ]
}

action "Install" {
  uses = "Borales/actions-yarn@master"
  args = "install"
}

action "Master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
  needs = ["Install"]
}

action "Build" {
  uses = "actions/npm@master"
  runs = "npm run build"
  needs = ["Master"]
}

action "Deploy" {
  uses = "maxheld83/ghpages@master"
  needs = ["Build"]
  secrets = ["GH_PAT"]
  env = {
    BUILD_DIR = "public/"
  }
}
