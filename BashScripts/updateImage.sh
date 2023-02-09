function update_config () {
  rm ../App/version.config;
  cp ../App/temp.file ../App/version.config
  rm ../App/temp.file
  return 1
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
then 
    create_temp
    file="../App/version.config"
    while read line; do
        if  [[ ${line} = $1* ]]
        then
            value=$(echo ${line} | awk -F: '{print $2}')
            value=$((value + 1))
            echo ${1}:${value}  >> ../App/temp.file
        else 
        echo ${line} >> ../App/temp.file
        fi
    done < "${file}"
    update_config
    return 0
fi
return 1
}

function increment_version_build () {
then 
    create_temp
    file="../App/version.config"
    while read line; do
        if  [[ ${line} = Build* ]]
        then
            echo Build:$2  >> ../App/temp.file
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
  git pull
  git add ../App/version.config
  git push
}
