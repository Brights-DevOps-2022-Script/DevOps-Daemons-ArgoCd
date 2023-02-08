echo inside 
git pull https://$1:$2@github.com/Brights-DevOps-2022-Script/team-3-argoTest.git HEAD:main
git checkout main

echo "apiVersion: kustomize.config.k8s.io/v1beta1"                    >  ./argocd/kustomize.yaml
echo "kind: Kustomization"                                            >> ./argocd/kustomize.yaml
echo "  resources:"                                                   >> ./argocd/kustomize.yaml
echo "   - nginx.yml"                                                 >> ./argocd/kustomize.yaml
echo "     images:"                                                   >> ./argocd/kustomize.yaml
echo "      - name: felixstr2"                                        >> ./argocd/kustomize.yaml
echo "        newName: devops2022.azurecr.io/nginxanis:${GIT_COMMIT}" >> ./argocd/kustomize.yaml

git add ../argocd/kustomize.yaml
git commit -m 'made with extenal bash script deployFile2.sh'
git push https://$1:$2@github.com/Brights-DevOps-2022-Script/team-3-argoTest.git HEAD:main
