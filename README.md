# Overview

BMC AMI DevX Total Test Auto Run extension is useful in executing Unit test and functional test scenarios on Mainframe. 

# BMC AMI DevX Total Test Auto Run

BMC AMI DevX Total Test Auto Run extension allows your Azure Pipeline to trigger a workflow in your Azure instance of BMC Azure Server where you can execute test scenarios based on your program. This extension can either be used where your test scenario configuration is stored in web repository, or when the TT configuration file is stored in your local workspaces. <br>

# Prerequisites
* The following are required to use the extension.
		
	1. Azure DevOps Server Organization.
	2. Topaz Workbench CLI.
	3. Host Communications Interface.
	4. BMC Common Configuration extension.

# Installing extensions in a Azure Devops Server Instance
* Follow these steps to install the extension
		
	1. Install the BMC Common Configuration Extension and create the connection by providing the required inputs. For more information, refer [BMC Common Configuration Extension](https://marketplace.visualstudio.com/items?itemName=BMC.common-config-extension)
	2. Install the BMC AMI DevX Total Test Auto Run extension according to the Azure Devops instructions for installing extensions. Refer [How to install an Extension](https://learn.microsoft.com/en-us/azure/devops/marketplace/install-extension?view=azure-devops&tabs=browser)
	3. Install the Topaz Workbench CLI on the machine in which Azure Devops Server is running that will execute the extension. 	The Topaz Workbench CLI is available in the Topaz Workbench installation package. If you do not have the installation package, please visit [support.bmc.com](https://support.bmc.com/).

# Usage

    * Triggers the workflow to execute the provided test scenario on any pipeline where the BMC AMI DevX Total Test Auto Run is added.
			
# Steps to use the extension
* Follow these steps to add the extension to your pipeline.

	1. Install the extension in your configuration.
	2. Go to the Pipeline YML file which you want to run.
	3. In the right side pane click on the **Show assistant button**.
	4. Search for the task **BMC TT AutoRun**.
	5. Upon clicking on the required extension it will ask you to enter the inputs.
	6. For the Total Test Configuration, you can choose between the **Repository** or the **Local Total Test Configuration** option.
	7. After entering the required fields Click on **Add** button at the bottom.
	8. To hide the password field click on the **Variables** Button on the top of the Tasks list.
	9. In the Variables page there is a + button on the right, click on that.
	10. Provide the Name and value to the **New Variable** and **Save** it.
	11. In the **Password** field of the Extension provide **$(New Variable name)**.
				
 
# Inputs


| Input name | Required | Description |
| --- | --- | --- |
| HCI Connection | Required | Choose one from the dropdown list and it is provided by Common Configuration Extension|
| User ID | Required | Provide your Mainframe User ID |
| Password | Required | Provide your Mainframe Password |
| Pass Ticket | Optional | passticket required to run the CLI (Required only if using the passticket)|
| Test Location Path | Required | Test Location Path is your local path where your test cases are stored |
| CLI installed directory location | Required | Choose one from the dropdown list and it is provided by Common Configuration Extension|
| Total Test Configuration | Required | Choose one of the two options given |
| Local TotalTest Configuration | Required | Provide the path where Local Total Test configuration Project resides |
| Repository Server URL | Required | Choose one from the dropdown list and it is provided by Common Configuration Extension|
| Environment ID | Required  | Provide the Environment ID |




# Outputs

Output will saved in Output folder created under Test Location Path in your local system.

# License summary

This Extension is made available under the BMC license.

## Product Assistance

BMC provides assistance for customers with its documentation, the BMC Support Center web site, and telephone customer support.

### BMC Support Center

You can access online information for BMC products via our Support Center site at [https://support.bmc.com](https://support.bmc.com/). Support Center provides access to critical information about your BMC products. You can review frequently asked questions, read or download documentation, access product fixes, or e-mail your questions or comments. The first time you access Support Center, you must register and obtain a password. Registration is free.

### Contacting Customer Support

At BMC, we strive to make our products and documentation the best in the industry. Feedback from our customers helps us maintain our quality standards. If you need support services, please obtain the following information before calling BMC\'s 24-hour telephone support:

- The Azure pipeline job output that contains any error messages or pertinent information.

- The name, release number, and build number of your product. This information is displayed in the installed extensions page. Apply filter: BMC in order to display all of the installed BMC extension.

- Environment information, such as the operating system and release on which the Topaz CLI is installed.

You can contact BMC in one of the following ways:


#### Web

You can report issues via BMC Support Center: [https://support.bmc.com](https://support.bmc.com/).

Note: Please report all high-priority issues by phone.

### Corporate Web Site

To access BMC site on the Web, go to [https://www.bmc.com/](https://www.bmc.com/). The BMC site provides a variety of product and support information.



   
