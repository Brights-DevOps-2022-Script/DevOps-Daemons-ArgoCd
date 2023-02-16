
echo "apiVersion: kustomize.config.k8s.io/v1beta1"    >  ./yml-Files/kustomization.yml
echo "kind: Kustomization"                            >> ./yml-Files/kustomization.yml
echo "resources:"                                     >> ./yml-Files/kustomization.yml
echo "  - allinone.yml"                               >> ./yml-Files/kustomization.yml
echo "images:"                                        >> ./yml-Files/kustomization.yml
echo "   - name: nginxcomic"                          >> ./yml-Files/kustomization.yml
echo "     newName: devops2022.azurecr.io/${1}"       >> ./yml-Files/kustomization.yml
echo "     newTag: ${2}"                              >> ./yml-Files/kustomization.yml