---
title: Networking
date: '2018-03-19T19:00:56-05:00'
module: tools
order: 6
---

Basic Networking: Pity the Fools That Don't Know It.

## LAN

Local Area Network

This includes all the devices behind the router. It's typically on a subnet with addresses that look like this:

* `192.168.x.x`
* `10.10.x.x`

## WAN

Wide Area Network

This is the World Wide Web and endpoints connected to it. IPs (Internet Protocol) can be virtually anything that is not one of the ones reserved for local network.

## DNS

Domain Name Servers

The phonebook for the Internet. All domain names resolve to an IP, and that IP allows it to communicate across the web.

There are root level DNS servers, and then there are DNS servers at your Internet Service Provider and even local office, and IP resolution is cached all the way down.

Your Domain Name Registrar may ask you to wait 72 hours to see the changes when you make a transfer to another DNS server. So if you are doing this operation or others, make sure you have it right before the change.

## NAT

Network Address Translation

The Router changes the IP address hit from the outside world into the IP used on the LAN:

* This by definition protects the internal world from the external.
* The only things exposed are those ports that are forwarded from the router.
  * Unless something is in the DMZ or the demilitarized zones, which is considered horribly bad practice.

## Ports

Ports are the sockets through which the communication occurs:

* You can have any number of ports within the integer limit, and each one of those would need to be exposed / forwarded from the firewall in order to be accessed.
