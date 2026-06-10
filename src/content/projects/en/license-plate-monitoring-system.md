---
title: License Plate Monitoring System
projectId: license-plate-monitoring-system
lang: en
competencies: [software]
shortDesc: Web administration and integration system for processing license plate recognition events from hundreds of cameras.
image: /images/projects/license-plate-monitoring-system-hero.webp
cardImage: /images/projects/license-plate-monitoring-system-card.webp
heroImage: /images/projects/license-plate-monitoring-system-hero.webp
tags: [.NET 8, ASP.NET Core, C#, Razor Pages, EF Core, Identity, Background Services, Windows Service, Serilog]
year: 2025
---

## What it is

A private, server-side license plate monitoring and integration system. It processes recognition events from hundreds of IP cameras, with thousands of expected plate reads per day.

The application compares incoming events against a maintained watchlist and forwards alarm events to an external video management or recording system.

The project was not a general-purpose camera platform, but a focused integration layer between cameras, operators, persistent data, and an alarm target system.

## The task

The application had to support both administrative and operator workflows. Administrators manage cameras, integration endpoints, alarm mappings, and users. Operators maintain monitored plates, import and export data, and review recent detection activity.

Key requirements:

- handle events from hundreds of cameras
- process thousands of plate reads per day
- receive and normalize license plate recognition events
- maintain monitored plate lists
- separate admin and operator roles
- forward alarm events to an external system
- keep data storage minimal and purpose-bound
- run in a Windows Server environment
- provide maintainable logging and configuration

## System architecture

The application is built with ASP.NET Core and Razor Pages. Authentication and authorization use ASP.NET Core Identity with role-based access control.

The system runs several background services:

- camera integration and event processing
- external recording/video system integration
- alarm mapping from detected plate events to target-system messages

The data layer uses Entity Framework Core and supports both SQLite and MySQL providers, keeping the same application logic usable across development, small deployments, and server environments.

![License plate monitoring system software block diagram](/images/projects/license-plate-monitoring-system-diagram.svg)

## Web interface

The UI is designed for technical administrators and operators who need a browser-based tool without installing a separate client.

Main areas:

- camera management
- external integration endpoint management
- monitored plate list maintenance
- CSV import/export
- alarm mapping configuration
- user and role management
- system and version information

The frontend uses Bootstrap-based admin screens with table-oriented workflows and focused JavaScript behavior for daily operational use.

## Technology choices

The project uses .NET 8 and C#. Razor Pages fit the problem well because this is an administrative and operational system rather than a public SPA product.

Technologies highlighted:

- .NET 8 and ASP.NET Core
- Razor Pages
- ASP.NET Core Identity
- Entity Framework Core
- SQLite and MySQL providers
- `BackgroundService` workers
- Serilog logging
- Windows Service hosting
- Bootstrap, Tabulator, Tom Select
- localized UI resources

## Privacy and operations

The system was designed to store only the information needed for its operational purpose. Configuration is layered through application settings, environment variables, command-line arguments, and server-side override files.

Windows Service hosting, persistent server-side storage, and structured logging make the application suitable for a maintained server environment rather than a one-off demo.

## My role

I took on the full project as an independent contractor: technical leadership, system design, implementation decisions, and the majority of the development work. Another developer contributed to the project as well, with the work coordinated under my technical direction.

The end user was a major international hypermarket chain with a large presence in Hungary, so reliability, operational clarity, and maintainability mattered from the start. The goal was to build a system that works with real devices, hundreds of camera sources, multiple user roles, and long-running server processes.
