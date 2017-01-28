# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|

config.vm.box = 'azure'
config.vm.box_url = 'https://github.com/msopentech/vagrant-azure/raw/master/dummy.box'
config.vm.network "private_network",ip: "192.168.50.4", virtualbox__intnet: "vboxnet0"
config.vm.hostname = "localhost"
config.vm.network "forwarded_port", guest: 80, host: 80

# use local ssh key to connect to remote vagrant box
config.ssh.private_key_path = '~/.ssh/id_rsa'


config.vm.provider :azure do |azure, override|

  azure.vm_image_urn = 'canonical:UbuntuServer:16.04-LTS:16.04.201701130'
  azure.vm_size = 'Basic_A0'
  azure.location = 'westeurope'
  azure.vm_name = 'Fifator'
  azure.tcp_endpoints = '80:80'
  #azure.vm_password = 'pass'

  azure.tenant_id = 'ec65dcde-0ff5-47d7-b5af-8e85e429e1c2'
  azure.client_id = '17db12eb-8ccd-419a-8442-c52b64f984c5'
  azure.client_secret = 'M0Qrhw1eYvNA+HHPviiiarONMacgv7uwkLA3Y5Tf+E4='
  azure.subscription_id = 'a1ba2458-e385-4e0e-a97c-8b4920a82a0b'

end
config.vm.provision "ansible" do |ansible|
        ansible.sudo = true
        ansible.playbook = "ansible.yml"
        ansible.verbose = "-vvvv"
        ansible.host_key_checking = false
  end


end
