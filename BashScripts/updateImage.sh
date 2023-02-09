function update_config () {
  rm ../App/Version.config;
  cp ../App/temp.file ../App/version.config
  rm ../App/temp.file
  return 1
}
