function update_config () {
  rm ../App/version.config;
  cp ../App/temp.file ../App/version.config
  rm ../App/temp.file
  push_to_git
  return 0
}

function create_temp () {
    echo -n "" >../App/temp.file
    return 0
}

function reset_config () {
    echo "" > ../App/version.config
    fill_config_default
}

function create_config () {
    TIMESTAMP=$(date +%y_%m_%d-%T)
    echo "" > ../App/version.config
}

function fill_config_default () {
    echo "Main: 0" >> ../App/version.config
    echo "Minor: 0" >> ../App/version.config
    echo "Patch: 0" >> ../App/version.config
    echo "Build: 0" >> ../App/version.config 
}

function check_config () {
    if [[ ! -f "..App/version.config" ]]
    then
        create_config
        fill_config_default
    fi
}

function increment_version_segment () { 
    create_temp
    file="../App/version.config"
    while read line; do
        if  [[ ${line} = $4* ]]
        then
            value=$(echo ${line} | awk -F: '{print $2}')
            value=$((value + 1))
            echo ${4}:${value}  >> ../App/temp.file
        else 
        echo ${line} >> ../App/temp.file
        fi
    done < "${file}"
    update_config
    return 0
fi
exit
}

function set_version_build () {
    create_temp
    file="../App/version.config"
    while read line; do
        if  [[ ${line} = Build* ]]
        then
            echo Build:$5  >> ../App/temp.file
        else 
        echo ${line} >> ../App/temp.file
        fi
    done < "${file}"
    update_config
    return 0
fi
return 1
}

function push_to_git () {
    git pull https://$1:$2@$3 HEAD:main
    git checkout main
    git add ../App/config.yaml
    git commit -m 'updatet version ${4}'
    git push https://$2:$3@$3 HEAD:main
}

changes=$(git diff HEAD^ --name-only ../App)
if [ -n "$changes" ]; then
  if [ "$4" = "Build" ]; then
    set_version_build "$@"
  else
    increment_version_segment "$@"
  fi
fi
